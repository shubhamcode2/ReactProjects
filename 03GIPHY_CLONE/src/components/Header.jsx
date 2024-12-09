import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
// import { GifState } from '../context/gif-context';
import {GifState} from '../context/gif-context'
function Header() {

    const [categories, setCategories] = React.useState([]);
    const [showCategories, setShowCategories] = React.useState(false);

    const {gf,filter,setFilter,favories} = GifState();

    // const fetchGifCategories = async () => {
    //     const res = await fetch("/categories.json");
    //     const {data} = await res.json();
    //     setCategories(data);
    //   };
    
      const fetchGifCategories = async () => {
        const {data} = await gf.categories();
        setCategories(data);
      };
    
      useEffect(() => {
        fetchGifCategories();
      }, []);
    


    return (
        <nav>
            <div className='relative flex gap-4 justify-between items-center mb-2'>
                <Link to="/" className='flex gap-2'>
                    <img src="/src/assets/logo.svg" alt="logo" className='w-8' />
                    <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>Giphy</h1>
                </Link>


                <div className='font-bold text-md flex gap-2 items-center'>
                    {/* render category */}

                    {categories?.slice(0, 5)?.map((category) => {
                        return <Link key={category.name}
                            to={`/${category.name_encoded}`}
                            className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
                            {category.name}
                        </Link>
                    })}




                    <button onClick={() => setShowCategories(!showCategories)}>
                        <HiEllipsisVertical
                            size={35}
                            className={`py-0.5 hover:gradient border-b-4 hidden lg:block ${showCategories ? 'gradient' : ''}  `} />
                    </button>

                    <div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded'>
                        <Link to='/favourite'>Favorite GIFs</Link>
                    </div>
                    <button>
                        <HiMiniBars3BottomRight className='text-sky-400 block lg:hidden ' size={30} />
                    </button>
                </div>

                {showCategories &&
                    <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
                        <span>
                            Categories
                            <hr />
                            <div>
                                <Link className='font-bold'>Reactions</Link>
                            </div>
                        </span>
                    </div>
                }

            </div>
            {/* search */}
        </nav>
    )
}

export default Header