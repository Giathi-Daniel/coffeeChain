# ☕ CoffeeChain — Empowering Kenyan Coffee Farmers with Data Transparency

> Building fair trade through tech.  
> A full-stack MVP connecting farmers, cooperatives, and buyers — powered by **React**, **Node.js**, and **Supabase**.

![CoffeeChain Banner](https://coffee-chain.vercel.app/)
*(Add your own banner or logo here — something that shows coffee, data, and sustainability)*

---

### Overview

**CoffeeChain** is a full-stack digital platform designed to promote **fairness, traceability, and data-driven insights** in Kenya’s coffee value chain.

It enables farmers to register, manage profiles, and track activities in real-time using a secure **Supabase backend**.  
The system also includes simulated IoT and buyer modules to demonstrate end-to-end trade transparency — from farm to export.

---

### Key Features

**Farmer Accounts** – Real authentication and profile management via Supabase.  
**Admin Dashboard** – Manage farmer status, view activity logs, and moderate updates.  
**Simulated Buyer Flow** – View available coffee lots, mock offers, and transaction previews.  
**IoT Mock Data** – Charts simulating soil moisture, temperature, and yield predictions.  
**Analytics & Insights** – Placeholder Power BI integration showing trends and fairness metrics.  
**SMS & Notifications** – Simulated notification interface for farmer updates (concept demo).  

---

### ⚙️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | TypeScript + TailwindCSS |
| **Backend** | Node.js (Express) |
| **Database & Auth** | Supabase (PostgreSQL + Auth) |
| **Data Simulation** | JSON / Mock APIs |
| **Analytics** | Power BI / Python (planned) |
| **Deployment** | Vercel (Frontend) + Supabase (Backend) |

---

### Architecture Overview

```

User → TypeScript Frontend → Supabase Auth → Supabase Database
↘︎ Mock IoT JSON → Dashboard Visualizations

````

---

### Impact

- **Empowers Farmers** with real-time data ownership and transparency.  
- **Supports Fair Trade** by connecting producers directly to ethical buyers.  
- **Encourages Sustainability** through data-driven decision-making.  
- **Builds Trust** between all stakeholders in the coffee value chain.  

---

### Getting Started

#### Clone the Repository
```bash
git clone https://github.com/Giathi-Daniel/coffeeChain.git
cd CoffeeChain
````

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Add Environment Variables

Create a `.env` file:

```bash
VITE_SUPABASE_URL=https://yourproject.supabase.co
VITE_SUPABASE_PROJECT_ID=YOUR_VITE_SUPABASE_PROJECT_ID
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_VITE_SUPABASE_PUBLISHABLE_KEY
```

#### 4️⃣ Start Development Server

```bash
npm run dev
```

Then open:
[http://localhost:5173/](http://localhost:5173/)

---

### Screenshots

*(Add 2–3 images here — e.g., Farmer Dashboard, Login Page, IoT Simulation View)*

---

### Contributing

We welcome contributions from everyone passionate about AgriTech innovation in Africa.

1. Fork this repository
2. Create a branch:

   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:

   ```bash
   git commit -m "Added new feature"
   ```
4. Push to your fork and open a PR 

We’ll review, test, and merge approved contributions.

---

### Support & Sponsorship

If you believe in the mission of **digital fairness for farmers**, please consider supporting CoffeeChain:

* ⭐ **Star this repository** to show your support
* 💰 [**Sponsor via GitHub Sponsors**](https://github.com/sponsors/Giathi-Daniel)
* ☕ **Share on social media** using `#CoffeeChainKenya`

Every star, share, and sponsor helps expand this project to more communities.

---
---

### License

MIT License © 2025 [Daniel Giathi](https://github.com/Giathi-Daniel)

> Free to use and modify for social-good and non-profit agricultural development initiatives.

---

### Project Status

| Stage                | Description                                       |
| -------------------- | ------------------------------------------------- |
| MVP Complete       | Real backend (Supabase) + working farmer system   |
| Simulated Modules | Buyer flow, IoT, and analytics visualizations     |
| Upcoming          | Real IoT integration + partner cooperatives pilot |
| Seeking           | Sponsors, NGOs, or accelerators for pilot rollout |

---

### Show Your Support

If you found this project inspiring or useful, please click the **Star** button at the top of the page!
Your support helps CoffeeChain reach more people and build a fairer coffee trade ecosystem.

[![Star on GitHub](https://img.shields.io/github/stars/<Giathi-Daniel>/coffeeChain?style=social)](https://github.com/<Giathi-Daniel>/CoffeeChain/stargazers)
