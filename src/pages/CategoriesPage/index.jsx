import React, { useEffect } from 'react'
import CategoriesContainer from '../../componets/CategoriesContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_reg';

export default function CategoriesPage() {

  const dispatch = useDispatch();

  const categoriesState = useSelector(store => store.categories);

  useEffect(() => dispatch(getCategories), [])

  return (
    <div>
      <CategoriesContainer categories={categoriesState} />
    </div>
  )
}
