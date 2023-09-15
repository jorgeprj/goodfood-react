import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Ranking from './pages/Ranking';
import Chef from './pages/Chef';
import Settings from './pages/Settings';

import recipes from './data/recipes.json'
import chefs from './data/chefs.json'
import NotFound from './pages/NotFound';

function App() {
	recipes.sort(() => Math.random() - 0.5)

	return (
		<div>
			<Router>
				<Navbar />
				<div className='container main'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/recipes" element={<Recipes recipes={recipes} chefs={chefs} />} />
						<Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} chefs={chefs} />} />
						<Route path="/ranking" element={<Ranking chefs={chefs} />} />
						<Route path="/chefs/:id" element={<Chef chefs={chefs} />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</div>
	)
}

export default App
