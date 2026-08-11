export const tracking = {
  badge: "SHIPMENT TRACKING",

  title: "Know where your shipment is, every step of the way.",

  subtitle:
    "Enter your tracking number to see the current status of your shipment.",

  placeholder: "Enter tracking number",

  button: "Track Shipment",

  demoTrackingNumber: "R8-2048-2026",

  steps: [
    {
      title: "Shipment Picked Up",
      description: "Your shipment has been collected.",
      status: "completed",
    },
    {
      title: "In Transit",
      description: "Your shipment is currently on the move.",
      status: "completed",
    },
    {
      title: "Distribution Center",
      description: "Shipment has arrived at the distribution center.",
      status: "current",
    },
    {
      title: "Out for Delivery",
      description: "Shipment is on its way to the destination.",
      status: "pending",
    },
    {
      title: "Delivered",
      description: "Shipment successfully delivered.",
      status: "pending",
    },
  ],
};