export const templates = [
  {
    id: "friendly_greeting_customer_name_business_name_staff_name_version1",
    name: "Friendly Greeting with Customer, Staff, Business Name, and Appointment Date and Time",
    templateName:
      "friendly_greeting_customer_name_business_name_staff_name_version1",
    message:
      "Hi {{customer_name}}, this is a reminder that you have a {{service_name}} appointment with {{staff_name}} at {{business_name}} on {{appointment_datetime}}. Thank you!",
    placeholders: [
      "customer_name",
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "no_staff_variant_upcoming_mention_version1",
    name: "Friendly Greeting with Customer, Staff, and Business Name",
    templateName: "no_staff_variant_upcoming_mention_version1",
    message:
      "Appointment reminder: This is a reminder for your upcoming {{service_name}} appointment at {{business_name}} on {{appointment_datetime}}. Thank you!",
    placeholders: ["service_name", "business_name", "appointment_datetime"],
  },
  {
    id: "no_business_name_variant_version1",
    name: "No Business Name Variant",
    templateName: "no_business_name_variant_version1",
    message:
      "Appointment reminder: You have a {{service_name}} appointment with {{staff_name}} on {{appointment_datetime}}.We look forward to seeing you!",
    placeholders: ["service_name", "staff_name", "appointment_datetime"],
  },
  {
    id: "no_business_name_variant_upcoming_mention_version1",
    name: "No Business Name Variant with Upcoming Mention",
    templateName: "no_business_name_variant_upcoming_mention_version1",
    message:
      "Appointment reminder: This is a reminder for your upcoming {{service_name}} appointment with {{staff_name}} on {{appointment_datetime}}. We look forward to seeing you!",
    placeholders: ["service_name", "staff_name", "appointment_datetime"],
  },
  {
    id: "friendly_greeting_customer_name_included_version1",
    name: "Friendly Greeting and Customer Name Included",
    templateName: "friendly_greeting_customer_name_included_version1",
    message:
      "Hi {{customer_name}}, this is a reminder about your upcoming {{service_name}} appointment with {{staff_name}} at {{business_name}} scheduled for {{appointment_datetime}}. We're looking forward to seeing you!",
    placeholders: [
      "customer_name",
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "friendly_greeting_customer_name_no_business_name_version1",
    name: "Friendly Greeting, Customer Name, No Business Name",
    templateName: "friendly_greeting_customer_name_no_business_name_version1",
    message:
      "Hi {{customer_name}}, this is a reminder about your upcoming {{service_name}} appointment with {{staff_name}} scheduled for {{appointment_datetime}}. We're looking forward to seeing you!",
    placeholders: [
      "customer_name",
      "service_name",
      "staff_name",
      "appointment_datetime",
    ],
  },
  {
    id: "friendly_greeting_customer_name_no_staff_name_version1",
    name: "Friendly Greeting, Customer Name, No Staff Name",
    templateName: "friendly_greeting_customer_name_no_staff_name_version1",
    message:
      "Hi {{customer_name}}, this is a reminder about your upcoming {{service_name}} appointment at {{business_name}} scheduled for {{appointment_datetime}}. We're looking forward to seeing you!",
    placeholders: [
      "customer_name",
      "service_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "simple_reminder_english",
    name: "Simple Reminder in English",
    templateName: "simple_reminder_english",
    message:
      "You have a {{service_name}} appointment at {{business_name}} on {{appointment_datetime}}. Auto message, replies not monitored.",
    placeholders: ["service_name", "business_name", "appointment_datetime"],
  },
  {
    id: "simple_reminder_spanish",
    name: "Simple Reminder in Spanish",
    templateName: "simple_reminder_spanish",
    message:
      "Tiene una cita para {{service_name}} en {{business_name}} el {{appointment_datetime}}. Mensaje automático, las respuestas no son monitoreadas.",
    placeholders: ["service_name", "business_name", "appointment_datetime"],
  },
  {
    id: "simple_reminder_french",
    name: "Simple Reminder in French",
    templateName: "simple_reminder_french",
    message:
      "Vous avez un rendez-vous pour {{ServiceName}} chez {{BusinessName}} le {{AppointmentDateTime}}. Message automatique, les réponses ne sont pas surveillées.",
    placeholders: ["service_name", "business_name", "appointment_datetime"],
  },
  {
    id: "staff_specific_reminder_english",
    name: "Staff Specific Reminder in English",
    templateName: "staff_specific_reminder_english",
    message:
      "This is a reminder for your upcoming {{service_name}} appointment with {{staff_name}} at {{business_name}} on {{appointment_datetime}}. Auto message, replies not monitored.",
    placeholders: [
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "staff_specific_reminder_spanish",
    name: "Staff Specific Reminder in Spanish",
    templateName: "staff_specific_reminder_spanish",
    message:
      "Este es un recordatorio para su próxima cita para {{service_name}} con {{staff_name}} en {{business_name}} el {{appointment_datetime}}. Mensaje automático, las respuestas no son monitoreadas.",
    placeholders: [
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "staff_specific_reminder_french",
    name: "Staff Specific Reminder in French",
    templateName: "staff_specific_reminder_french",
    message:
      "Ceci est un rappel pour votre prochain rendez-vous de {{service_name}} avec {{staff_name}} chez {{business_name}} le {{appointment_datetime}}. Message automatique, les réponses ne sont pas surveillées.",
    placeholders: [
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "compact_reminder_english",
    name: "Compact Reminder in English",
    templateName: "compact_reminder_english",
    message:
      "Hi, your {{service_name}} appointment with {{staff_name}} at {{business_name}} is at {{appointment_datetime}}. Auto message, replies not monitored.",
    placeholders: [
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "compact_reminder_spanish",
    name: "Compact Reminder in Spanish",
    templateName: "compact_reminder_spanish",
    message:
      "Hola, su cita para {{service_name}} con {{staff_name}} en {{business_name}} es el {{appointment_datetime}}. Mensaje automático, las respuestas no son monitoreadas.",
    placeholders: [
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
  {
    id: "compact_reminder_french",
    name: "Compact Reminder in French",
    templateName: "compact_reminder_french",
    message:
      "Bonjour, votre rendez-vous pour {{service_name}} avec {{staff_name}} chez {{business_name}} est prévu le {{appointment_datetime}}. Message automatique, les réponses ne sont pas surveillées.",
    placeholders: [
      "service_name",
      "staff_name",
      "business_name",
      "appointment_datetime",
    ],
  },
];

export const API_CONFIG = {
  baseUrl:
    import.meta.env.VITE_API_BASE_URL ||
    "https://graph.facebook.com/v18.0/858527964014386/messages",
  bearerToken:
    import.meta.env.VITE_VERIFY_TOKEN ||
    import.meta.env.VITE_API_BEARER_TOKEN ||
    "",
};
