import React from 'react'
import CategoryCard from '../CategoryCard'
import s from './index.module.css'

export default function CategoriesContainer({categories}) {
  return (
    <div className={s.container}>
        {
            categories.map(el => <CategoryCard key={el} category={el} />)
        }
    </div>
  )
}
