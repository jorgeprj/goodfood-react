import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';


function App() {
	const recipes = [
		{
			id: 1,
			title: "Gourmet Steak",
			image: "img/gallery/img_1.jpg",
			chef: "Max Fischer",
			chefImg: "img/top-chefs/img_13.jpg",
			desc: "A perfectly grilled premium cut with sophisticated accompaniments."
		},
		{
			id: 2,
			title: "Dragon Roll",
			image: "img/gallery/img_22.jpg",
			chef: "Joe Yamamoto",
			chefImg: "img/top-chefs/img_8.jpg",
			desc: "A delectable sushi roll featuring eel, avocado, and a savory sauce."
		},
		{
			id: 3,
			title: "Angus Burger",
			image: "img/gallery/img_8.jpg",
			chef: "David Smith",
			chefImg: "img/top-chefs/img_12.jpg",
			desc: "A delectable Angus beef burger adorned with gourmet toppings."
		},
		{
			id: 4,
			title: "Meatball Pasta",
			image: "img/gallery/img_12.jpg",
			chef: "Bella Lopez",
			chefImg: "img/top-chefs/img_1.jpg",
			desc: "A flavorful fusion of spicy meatballs and pasta with a Mexican twist."
		},
		{
			id: 5,
			title: "Samba Soul Feijoada",
			image: "img/gallery/img_14.jpg",
			chef: "Pierre Dupont",
			chefImg: "img/top-chefs/img_5.jpg",
			desc: "A delicious traditional Brazilian black bean stew with a soulful twist."
		},
		{
			id: 6,
			title: "Magic Pizza",
			image: "img/gallery/img_20.jpg",
			chef: "Luca Rossi",
			chefImg: "img/top-chefs/img_10.jpg",
			desc: "A delightful pizza topped with the magic of pepperoni slices."
		}
	].sort(() => Math.random() - 0.5)

	return (
		<div>
			<Router>
				<Navbar />
				<div className='container main'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/recipes" element={<Recipes recipes={recipes} />} />
						<Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />
						<Route path="/ranking" element={<Ranking />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	)
}

export default App
