export const fields = {
  name: "entry.1209359910",
  email: "entry.795716177",
  message: "entry.1976313228",
};
export const formId =
  "1FAIpQLSdmu0SxswffcQLdTIs8cYfsWFgouRqEyg_Z3Qof_VHPYRlHZQ";

export const getFormUrl = ({ name, email, message }) =>
  `https://docs.google.com/forms/d/e/${formId}/formResponse?${fields.name}=${name}&${fields.email}=${email}&${fields.message}=${message}`;
