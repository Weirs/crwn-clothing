import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import { CATEGORIES_ACTION_TYPE } from './category.type';




export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments,'categories');//call - execute the function
        yield put(fetchCategoriesSuccess(categoriesArray));//put == dispatch
    } catch (error){
        yield put(fetchCategoriesFailed(error));
    };
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START,fetchCategoriesAsync);//cancel and re-dispatch a new action with side effect functions indicated
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]); // all - execute array of function executions in middleware in parallel
}