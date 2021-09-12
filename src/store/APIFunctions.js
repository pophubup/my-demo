export const GetFirstDataFromEveryGroup = async () => {
  const res = await fetch(
    `${process.env.VUE_APP_URL}/api/ImageFile/GetFirstDataEveryGroup`
  );
  const reuslt = await res.json();
  // console.log(reuslt);
  return reuslt;
};
export const InsertProducts = async (formdata) => {
  const res = await fetch(
    `${process.env.VUE_APP_URL}/api/ImageFile/InsertData`,
    {
      method: "POST",
      body: formdata,
    }
  );
  return await res.json();
};
export const GetGroups = async () => {
  const res = await fetch(`${process.env.VUE_APP_URL}/api/Group/GetGroups`);
  const reuslt = await res.json();
  return reuslt;
};
export const GetOrganizationGroup = async () => {
  const res = await fetch(
    `${process.env.VUE_APP_URL}/api/Group/GetOrganizationViewModels`
  );
  const reuslt = await res.json();
  return reuslt;
};
export const GetLabels = async (id) => {
  const res = await fetch(`${process.env.VUE_APP_URL}/api/Label/GetData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
  const reuslt = await res.json();
  return reuslt;
};
