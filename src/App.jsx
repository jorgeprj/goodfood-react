import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

import recipes from './data/recipes.json'
import chefs from './data/chefs.json'

function App() {
	recipes.sort(() => Math.random() - 0.5)

	return (
		<div>
			<Router>
				<Navbar />
				<div className='container main'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/recipes" element={<Recipes recipes={recipes} />} />
						<Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} chefs={chefs}/>} />
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
