/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import UserProfileCard from './components/UserProfileCard/UserProfileCard'
import './App.css'
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import { AlertBox } from './components/AlertBox/AlertBox';
function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);
const user1 = {
  id:"1",
  name:"Jeffrey Connors",
  email: "thatswoleguy@hotmail.com",
  role: "Teleprompter",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWt5k6l3MRvnFJT4aCBBdEgDUxi54vGfINcg&s"
}

const product = {
  id:"450",
  name:"Scissors",
  price: 5.99,
  description:"Cut things",
  imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOlwvr5QUKtsTzUg9YcplBRGlDLZCyKIu6A&s",
  inStock:true
}

const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };
 
  return (
    <>
    {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <UserProfileCard user={user1}
      showEmail= {true}
      showRole = {true}
      onEdit={(userId) => {console.log(userId)}} >

      </UserProfileCard>

      <ProductDisplay product ={product}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={(productId) => handleAddToCart(productId) }>

      </ProductDisplay>
    </>
  )
}

export default App
