export function formatPhone(phone: string): string {
    const cleanedPhone = phone.replace(/\D/g, "");
    return `+55 (${cleanedPhone.slice(0, 2)}) ${cleanedPhone.slice(2, 7)}-${cleanedPhone.slice(7, 11)}`;
  }
  