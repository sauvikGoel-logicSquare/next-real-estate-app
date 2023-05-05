import { filterData, getFilterValues } from "@/utils/filterData";
import { Box, Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);

  const _searchProperties = (filterValues) => {
    console.log(filterValues);
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    console.log(values);

    values.forEach((item) => {
      if (item?.value && filterValues?.[item?.name]) {
        query[item?.name] = item?.value;
      }
    });

    console.log(query);

    router.push({ pathname: path, query });
  };

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter?.queryName}>
          <Select
            placeholder={filter?.placeholder}
            width="fit-content"
            p={2}
            onChange={(e) =>
              _searchProperties({ [filter?.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item?.value} key={item?.value}>
                {item?.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
