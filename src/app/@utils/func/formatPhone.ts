export const formatPhone = (phone: string) => {
  if (phone.startsWith('0') && phone.length === 10) {
    return '+886' + phone.substring(1);
  }
  if (phone.startsWith('9') && phone.length === 9) {
    return '+886' + phone;
  }
  return null;
};
