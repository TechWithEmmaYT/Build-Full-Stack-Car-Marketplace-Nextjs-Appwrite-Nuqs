# 🌟 Build & Deploy a Car Marketplace | Next.js, Appwrite, Price range - _AutoHunt_

## 🎥 Watch the Full Video on YouTube

**[Subscribe to the Channel](https://tinyurl.com/subcribe-to-techwithEmma)** to stay updated with more exciting projects and tutorials!

---

## ❤️ Support the Channel

If you love this project and want to see more, consider supporting the channel:

- Give this repository a ⭐️ on GitHub.
- **[Join Channel Membership on Youtube](https://www.youtube.com/channel/UCKF3twEFIvTQZxbY13D-udQ/join)** to help fund more educational content.
- Like, share, and subscribe to the channel for more tutorials and updates!

---

## 📌 Project Overview

Welcome to **AutoHunt**, a dynamic and scalable car marketplace built with **Next.js**, **Appwrite**, and **SendBird**. This project enables users to buy and sell both brand-new and used cars with powerful search, filtering, and real-time chat capabilities. Perfect for developers aiming to build feature-rich marketplace platforms.

---

## 🌟 Key Features

- 🔒 **Authentication** (Appwrite Register & Login)
- 🚗 **List & Manage Car Listings** (New & Used Cars)
- 🛠️ **Reusable Filters** (Price, Brand, Model, Year, Fuel Type, Condition)
- 🏢 **Seller's Shop**
- 🎮 **Image Gallery with Thumbnails**
- 💎 **Price Range Selector**
- 💡 **Custom Form Generator** for Listing Creation
- 💄 **Reusable UploadImage Hook** for Image Uploads
- 📊 **Optimized Filtering & Search System**
- ✨ **Modern UI with ShadCN Components**
- ✨ **Built with Next.js & Appwrite for Full-stack Capabilities**

---

## 🚀 Tools & Technologies

This project leverages the latest tools and frameworks for a robust development experience:

- **Next.js**: Scalable full-stack React framework
- **Appwrite**: Authentication, Database, and File Storage
- **SendBird**: Real-time chat system
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design
- **React Hook Form & Zod**: Form validation & schema handling
- **TanStack Query**: Data fetching and caching
- **Vercel**: Seamless deployment

---

## 🔀 Getting Started

### 1. Watch the Video

Follow along step-by-step by watching the full guide on YouTube.

### 2. Set Up Environment Variables

Create a `.env.local` file in the root of your project and configure these variables:

```plaintext
NEXT_APPWRITE_KEY=

NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT=<your-appwrite-project-id>

NEXT_PUBLIC_APPWRITE_DATABASE_ID=
NEXT_PUBLIC_APPWRITE_COLLECTION_SHOP_ID=
NEXT_PUBLIC_APPWRITE_COLLECTION_CAR_LISTING_ID=
NEXT_PUBLIC_APPWRITE_BUCKET_IMAGES_ID=<your-appwrite-storage-bucket>

NEXT_PUBLIC_SENDBIRD_APP_ID=<your-sendbird-app-id>
NEXT_PUBLIC_SENDBIRD_API_TOKEN=<>
```

### 3. Run the Application

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Access the app at `http://localhost:3000`.

---

## 🌐 Deploying AutoHunt

### 1. Add Environment Variables

Add the `.env.local` variables to your hosting platform (e.g., Vercel).

### 2. Deploy

Deploy your app using Vercel for optimal performance.

---

## 🎨 Custom Theme Styles

[Jump to Custom Theme Styles](#custom-theme-styles)

<details>
  <summary>Click to toggle Custom Theme Styles</summary>

```css
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.b-carousel-slider .carousel--navigation {
  svg {
    width: 64px !important;
    height: 64px !important;
    color: white !important;
  }
}
.safety-list {
  list-style: disc !important;
}
.phone--input {
  button {
    height: 100% !important;
  }
  input {
    height: 100% !important;
  }
}
.sendbird-ui-header__right {
  display: none !important;
}
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
@layer base {
  :root {
    --boxShadow: 0 2px 8.8px 3.2px #0207010a;

    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 141 100% 36%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 141 100% 36%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 141 100% 36%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 141 100% 36%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 141 100% 36%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 141 100% 36%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}
```

</details>

---

## 🗃️ Car Options Constant

[Jump to Car Options](#️car-options-constant)

<details>
  <summary>Click to toggle Car Options</summary>

```javascript
export const CAR_BRAND_OPTIONS = [
  { value: "mercedes-benz", label: "Mercedes Benz" },
  { value: "tesla", label: "Tesla" },
  { value: "lexus", label: "Lexus" },
  { value: "toyota", label: "Toyota" },
  { value: "bmw", label: "BMW" },
  { value: "ford", label: "Ford" },
  { value: "tata", label: "Tata" },
  { value: "audi", label: "Audi" },
  { value: "hyundai", label: "Hyundai" },
];

export const CAR_MODEL_OPTIONS = [
  { key: "mercedes-benz", value: "gle-class", label: "GLE-Class" },
  { key: "mercedes-benz", value: "glk-class", label: "GLK-Class" },
  { key: "mercedes-benz", value: "g-class", label: "G-Class" },
  { key: "mercedes-benz", value: "s-class", label: "S-Class" },
  { key: "tesla", value: "model-s", label: "Model S" },
  { key: "tesla", value: "model-3", label: "Model 3" },
  { key: "tesla", value: "model-x", label: "Model X" },
  { key: "lexus", value: "es300", label: "ES 300" },
  { key: "lexus", value: "rx350", label: "RX 350" },
  { key: "lexus", value: "gx460", label: "GX 460" },
  { key: "toyota", value: "camry", label: "Camry" },
  { key: "toyota", value: "land-cruiser", label: "Land Cruiser" },
  { key: "toyota", value: "corolla", label: "Corolla" },
  { key: "toyota", value: "camry-hybrid", label: "Camry Hybrid" },
];

export const CAR_BODY_TYPE_OPTIONS = [
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "truck", label: "Truck" },
  { value: "hatchback", label: "Hatchback" },
  { value: "coupe", label: "Coupe" },
  { value: "convertible", label: "Convertible" },
  { value: "van", label: "Van/Minivan" },
  { value: "wagon", label: "Wagon" },
  { value: "other", label: "Other" },
];

export const CAR_SECOND_CONDITION_OPTIONS = [
  { value: "afterCrash", label: "After Crash" },
  { value: "engineIssue", label: "Engine Issue" },
  { value: "gearIssue", label: "Gear Issue" },
  { value: "needBodyRepair", label: "Needs Body Repair" },
  { value: "needRepair", label: "Needs Repair" },
  { value: "needRepainting", label: "Needs Repainting" },
  { value: "tireDamage", label: "Tire Damage" },
  { value: "glassDamage", label: "Glass Damage" },
  { value: "electricalIssue", label: "Electrical Issue" },
  { value: "suspensionIssue", label: "Suspension Issue" },
  { value: "brakeIssue", label: "Brake Issue" },
  { value: "interiorDamage", label: "Interior Damage" },
  { value: "minorWearTear", label: "Minor Wear and Tear" },
  { value: "noFault", label: "No Fault" },
];

export const CAR_KEY_FEATURES_OPTIONS = [
  { value: "sunroof", label: "Sunroof/Moonroof" },
  { value: "navigation", label: "Navigation System" },
  { value: "leatherSeats", label: "Leather Seats" },
  { value: "cooledSeats", label: "Cooled Seats (Ventilated)" },
  { value: "powerSeats", label: "Power Seats" },
  { value: "premiumSound", label: "Premium Sound System" },
  { value: "alloyWheels", label: "Alloy Wheels" },
  { value: "parkingSensors", label: "Parking Sensors" },
  { value: "rearviewCamera", label: "Rearview Camera" },
  { value: "360Camera", label: "360° Camera" },
  { value: "adaptiveCruiseControl", label: "Adaptive Cruise Control" },
  {
    value: "automaticEmergencyBraking",
    label: "Automatic Emergency Braking",
  },
  { value: "bluetooth", label: "Bluetooth Connectivity" },
  { value: "appleCarplay", label: "Apple CarPlay" },
  { value: "androidAuto", label: "Android Auto" },
  { value: "keylessEntry", label: "Keyless Entry" },
  { value: "pushButtonStart", label: "Push Button Start" },
  { value: "remoteStart", label: "Remote Start" },
  { value: "powerLocks", label: "Power Locks" },
  { value: "airConditioning", label: "Air Conditioning" },
];

export const CAR_COLOR_OPTIONS = [
  {
    value: "white",
    label: "White",
  },
  {
    value: "gray",
    label: "gray",
  },
  {
    value: "black",
    label: "Black",
  },
  {
    value: "red",
    label: "Red",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "other",
    label: "Other",
  },
];

export const CAR_CONDITION_OPTIONS = [
  { value: "BRAND_NEW", label: "Brand New" },
  { value: "USED", label: "Used" },
];

export const CAR_FUELTYPE_OPTIONS = [
  { value: "PETROL", label: "Petrol" },
  { value: "DIESEL", label: "Diesel" },
  { value: "ELECTRIC", label: "Electric" },
  { value: "HYBRID", label: "Hybrid" },
];

export const CAR_TRANSMISSION_OPTIONS = [
  { value: "AUTOMATIC", label: "Automatic" },
  { value: "MANUAL", label: "Manual" },
  { value: "CVT", label: "CVT" },
  { value: "AMT", label: "AMT" },
];

export const CAR_DRIVETRAIN_OPTIONS = [
  { value: "FWD", label: "Front-Wheel Drive (FWD)" },
  { value: "RWD", label: "Rear-Wheel Drive (RWD)" },
  { value: "AWD", label: "All-Wheel Drive (AWD)" },
  { value: "4WD", label: "Four-Wheel Drive (4WD)" },
];

export const CAR_YEAR_OPTIONS = [
  { value: "2025", label: "2025" },
  { value: "2023", label: "2023" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2017", label: "2017" },
  { value: "2015", label: "2015" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
];

export const CAR_YEAR_RANGE_OPTIONS = [
  { value: "2011-2013", label: "2011 - 2013" },
  { value: "2015-2017", label: "2015 - 2017" },
  { value: "2019-2020", label: "2019 - 2020" },
  { value: "2021-2023", label: "2021 - 2023" },
];

export const CAR_PRICE_RANGE_OPTIONS = [
  { value: "0-50000", label: "Under 50k" },
  { value: "50000-100000", label: "50 - 100k" },
  { value: "100000-300000", label: "100 - 300k" },
  { value: "300000-500000", label: "300 - 500k" },
  { value: "500000-1000000", label: "500 - 1M" },
  { value: "custom", label: "Custom" },
];
```

</details>

## 🏷️ Listing Fields Object

[Jump to Listing Fields](#️listing-fields-object)

<details>
  <summary>Click to toggle Listing Fields</summary>

```javascript
import { FieldType } from "@/@types/index.type";
import {
  CAR_BRAND_OPTIONS,
  CAR_TRANSMISSION_OPTIONS,
  CAR_CONDITION_OPTIONS,
  CAR_COLOR_OPTIONS,
  CAR_YEAR_OPTIONS,
  CAR_MODEL_OPTIONS,
  CAR_FUELTYPE_OPTIONS,
  CAR_BODY_TYPE_OPTIONS,
  CAR_SECOND_CONDITION_OPTIONS,
  CAR_KEY_FEATURES_OPTIONS,
  CAR_DRIVETRAIN_OPTIONS,
} from "./car-options";
export const addListingFields: FieldType[] = [
  {
    name: "brand",
    fieldType: "select",
    label: "Brand (Make)",
    required: true,
    disabled: false,
    options: CAR_BRAND_OPTIONS,
  },
  {
    name: "model",
    fieldType: "select",
    label: "Model",
    required: true,
    disabled: false,
    options: CAR_MODEL_OPTIONS,
  },
  {
    name: "yearOfManufacture",
    fieldType: "select",
    label: "Year of Manufacture",
    required: true,
    disabled: false,
    options: CAR_YEAR_OPTIONS,
  },
  {
    name: "exteriorColor",
    fieldType: "select",
    label: "Exterior Color",
    required: true,
    disabled: false,
    options: CAR_COLOR_OPTIONS,
  },
  {
    name: "interiorColor",
    fieldType: "select",
    label: "Interior Color",
    required: false,
    disabled: false,
    options: CAR_COLOR_OPTIONS,
  },
  {
    name: "condition",
    fieldType: "select",
    label: "Condition",
    required: true,
    disabled: false,
    options: CAR_CONDITION_OPTIONS,
  },
  {
    name: "secondCondition",
    fieldType: "multiselect",
    label: "Second Condition (Optional)",
    required: false,
    disabled: false,
    options: CAR_SECOND_CONDITION_OPTIONS,
  },
  {
    name: "mileage",
    fieldType: "number",
    label: "Mileage",
    required: false,
    disabled: false,
  },
  {
    name: "transmission",
    fieldType: "select",
    label: "Transmission",
    required: true,
    disabled: false,
    options: CAR_TRANSMISSION_OPTIONS,
  },
  {
    name: "fuelType",
    fieldType: "select",
    label: "Fuel Type",
    required: true,
    disabled: false,
    options: CAR_FUELTYPE_OPTIONS,
  },
  {
    name: "keyFeatures",
    fieldType: "multiselect",
    label: "Key Features (Optional)",
    required: false,
    disabled: false,
    options: CAR_KEY_FEATURES_OPTIONS,
  },

  {
    name: "vin",
    fieldType: "text",
    label: "VIN Chassis Number",
    required: false,
  },
  {
    name: "bodyType",
    fieldType: "select",
    label: "Body Type",
    required: false,
    disabled: false,
    options: CAR_BODY_TYPE_OPTIONS,
  },

  {
    name: "drivetrain",
    fieldType: "select",
    label: "Drivetrain",
    required: true,
    disabled: false,
    options: CAR_DRIVETRAIN_OPTIONS,
  },
  {
    name: "seatingCapacity",
    fieldType: "number",
    label: "Seating Capacity",
    required: false,
    disabled: false,
  },
  {
    name: "description",
    fieldType: "textarea",
    label: "Description",
    col: 2,
    required: false,
    disabled: false,
  },
  {
    name: "price",
    fieldType: "currency",
    label: "Price",
    col: 1,
    required: true,
    disabled: false,
  },
  {
    name: "contactPhone",
    fieldType: "phone",
    label: "Contact Phone Number",
    required: true,
    disabled: false,
  },
];
```

## </details>

### 🎦 Like, Share & Subscribe

Don’t miss out! **[Subscribe to the Channel](https://tinyurl.com/subcribe-to-techwithEmma)** for more amazing content and exciting projects.

Now, let’s dive into the demo of **AutoHunt**! 🚀
