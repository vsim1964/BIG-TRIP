import FilterView from './view/filter-view';
import NewPointButtonView from './view/new-point-btn-view';
import HeaderView from './view/header-view';
import {
  render
} from './render';
import ListPresenter from './presenter/list-presenter';
import PointsModel from './model/points-model';

const siteTripMain = document.querySelector('.trip-main');
const filter = new FilterView();
const newPointButton = new NewPointButtonView;
const header = new HeaderView;

const siteMainElement = document.querySelector('.page-main');
const listContainer = siteMainElement.querySelector('.page-body__container');

const listPresenter = new ListPresenter();
const point = new PointsModel();

render(header, siteTripMain);
render(filter, siteTripMain);
render(newPointButton, siteTripMain);

listPresenter.init(listContainer, point);
