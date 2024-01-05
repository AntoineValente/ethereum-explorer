import retry from 'async-retry';
import z, { ZodSchema } from 'zod';

export type Endpoint = {
  method: string;
  path: string;
  alias: string;
  parameters: ZodSchema;
  response: ZodSchema;
};

type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

type FilterArrayByValue<
  T extends unknown[],
  C,
  Acc extends unknown[] = [],
> = T extends [infer Head, ...infer Tail]
  ? Head extends C
    ? FilterArrayByValue<Tail, C, [...Acc, Head]>
    : FilterArrayByValue<Tail, C, Acc>
  : Acc;

type Client<Api extends readonly Endpoint[]> = {
  [Alias in Api[number]['alias']]: (
    parameters: z.input<
      FilterArrayByValue<
        DeepWriteable<Api>,
        { alias: Alias }
      >[number]['parameters']
    >,
  ) => Promise<
    z.input<
      FilterArrayByValue<
        DeepWriteable<Api>,
        { alias: Alias }
      >[number]['response']
    >
  >;
};

export const buildApiClient = <
  Url extends string,
  ApiKey extends string,
  Api extends readonly Endpoint[],
>(
  url: Url,
  apiKey: ApiKey,
  apiEndpoints: Api,
): Client<Api> =>
  apiEndpoints.reduce(
    (acc, endpoint) => ({
      ...acc,
      [endpoint.alias]: (
        parameters: z.infer<typeof endpoint.parameters>,
      ): Promise<z.infer<typeof endpoint.response>> =>
        retry(async () => {
          const response = await fetch(
            `${url}${endpoint.path}?${new URLSearchParams(parameters)}`,
            {
              headers: {
                'x-api-key': apiKey,
              },
            },
          );
          if (response.status !== 200) throw new Error();

          return response.json();
        }),
    }),
    {} as Client<Api>,
  );
