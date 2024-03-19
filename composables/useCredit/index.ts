import {useAsync} from "@nuxtjs/composition-api";
import {Query, useApi} from "~/composables";
import {creditQuery} from "~/queries/customerCreditQuery";
export const useCredit = () =>  useAsync(async() =>  {
  const { data } = await useApi().query<{credits: Query['customerCredit']}>(creditQuery)
  return data.customerCredit;
});
