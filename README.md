To run
npm install
npm run dev


Main Components

UserProfileCard:

A reusable user profile component that displays user information and supports optional features like email, role, and edit actions.

UserProfileCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl: string;
  };

  showEmail?: boolean;
  showRole?: boolean;

  onEdit?: (userId: string) => void;

  children?: React.ReactNode;
}

ProductDisplay:

A reusable component that displays product details such as name, price, image, and stock status. It also supports optional UI features like stock visibility and add-to-cart functionality.

ProductDisplayProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    inStock: boolean;
  };

  showStockStatus?: boolean;

  onAddToCart?: (productId: string) => void;

  children?: React.ReactNode;
}

1. How did you handle optional props in your components?

I handled optional props by putting "?" in the interface definition and for optional functions using optional chaining (?.) to ensure it would only call if the function was defined.

2. What considerations did you make when designing the component interfaces?

Well I didn't really make the interfaces I used what was given for the lab. But they are designed to give order but also be flexible.

3. How did you ensure type safety across your components?

By defining every item and their props, it means nothing is unaccounted for an everything has a set type.

