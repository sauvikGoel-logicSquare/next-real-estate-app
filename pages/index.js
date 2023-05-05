import Banner from "@/components/Banner";
import { Box, Flex } from "@chakra-ui/react";

import { BASEURL } from "../config";
import { fetchApi } from "@/utils/fetchApi";
import { useEffect } from "react";
import Property from "../components/Property";

export const getStaticProps = async () => {
  try {
    const propertyForSale = await fetchApi(
      `${BASEURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
    );
    const propertyForRent = await fetchApi(
      `${BASEURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
    );

    console.log("propertyForSale?.hits: ", propertyForSale?.hits);

    return {
      props: {
        propertiesForSale: propertyForSale?.hits,
        propertiesForRent: propertyForRent?.hits,
      },
    };
  } catch (err) {
    return {
      props: {
        error: JSON.stringify(err),
      },
    };
  }
};

export default function Home({ propertiesForSale, propertiesForRent, error }) {
  console.log(propertiesForRent);
  console.log(propertiesForSale);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <Box>
      <Banner
        purpose="Rent a home"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Flex flexWrap="wrap">
        {propertiesForRent?.map((each) => (
          <Property key={each?.id} property={each} />
        ))}
      </Flex>

      <Banner
        purpose="Buy a home"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale?.map((each) => (
          <Property key={each?.id} property={each} />
        ))}
      </Flex>
    </Box>
  );
}
