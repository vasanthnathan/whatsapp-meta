export function parsePlaceholders(message) {
  const placeholderRegex = /\{\{(\w+)\}\}/g;
  const placeholders = [];
  let match;

  while ((match = placeholderRegex.exec(message)) !== null) {
    placeholders.push(match[1]);
  }

  return [...new Set(placeholders)];
}

export function buildPayload(template, formValues, phoneNumber) {
  const parameters = template.placeholders.map((placeholder) => ({
    type: "text",
    parameter_name: placeholder,
    text: formValues[placeholder] || "",
  }));

  return {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: phoneNumber,
    type: "template",
    template: {
      name: template.templateName,
      language: {
        code: template.language || "en",
      },
      components: [
        {
          type: "body",
          parameters: parameters,
        },
      ],
    },
  };
}

export function formatPhoneNumber(countryCode, phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "");
  return countryCode + cleaned;
}
