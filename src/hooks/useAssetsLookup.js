import { useQuery, gql } from '@apollo/client';

const GET_CRYPTO_ASSETS_LOOKUP = gql`
query {
  supportedCryptoAssets
}
`

export const useAssetsLookup = () => {
    const {error, data, loading} = useQuery(GET_CRYPTO_ASSETS_LOOKUP);

    return {error, data, loading};
}