import {
  ADD_AUTHOR,
  ADD_PRODUCER,
  REMOVE_AUTHOR,
  REMOVE_PRODUCER,
  SET_AUTHORS,
  SET_BLOG_NAME,
  SET_DATE,
  SET_DENOMINATION,
  SET_EDITORIAL,
  SET_ENTITY_NAME,
  SET_IMAGE_TYPE,
  SET_MEDIA_FORMAT,
  SET_NUMBER,
  SET_ORGANIZATION_NAME,
  SET_PAGE_NUMBER,
  SET_PAGE_SPAN,
  SET_PRODUCERS,
  SET_PRODUCTION_COMPANY_LOCATION,
  SET_PUBLICATION_PLACE,
  SET_PUBLICATION_YEAR,
  SET_SEMINAR_NAME,
  SET_TITLE,
  SET_URL,
  SET_VOLUME
} from './actionTypes';

export function addAuthor(author) {
  return { type: ADD_AUTHOR, payload: author };
}
export function addProducer(producer) {
  return { type: ADD_PRODUCER, payload: author };
}
export function removeAuthor(author) {
  return { type: REMOVE_AUTHOR, payload: author };
}
export function removeProducer(producer) {
  return { type: REMOVE_PRODUCER, payload: author };
}
export function setAuthors(authors) {
  return { type: SET_AUTHORS, payload: authors };
}
export function setBlogName(name) {
  return { type: SET_BLOG_NAME, payload: name };
}
export function setDate(date) {
  return { type: SET_DATE, payload: date };
}
export function setDenomination(denom) {
  return { type: SET_DENOMINATION, payload: denom };
}
export function setEditorial(editorial) {
  return { type: SET_EDITORIAL, payload: editorial };
}
export function setEntityName(name) {
  return { type: SET_ENTITY_NAME, payload: name };
}
export function setImageType(type) {
  return { type: SET_IMAGE_TYPE, payload: type };
}
export function setMediaFormat(format) {
  return { type: SET_MEDIA_FORMAT, payload: format };
}
export function setNumber(number) {
  return { type: SET_NUMBER, payload: number };
}
export function setOrganizationName(name) {
  return { type: SET_ORGANIZATION_NAME, payload: name };
}
export function setPageNumber(number) {
  return { type: SET_PAGE_NUMBER, payload: number };
}
export function setPageSpan(pages) {
  return { type: SET_PAGE_SPAN, payload: pages };
}
export function setProducers(producers) {
  return { type: SET_PRODUCERS, payload: producers };
}
export function setProductionCompanyLocation(location) {
  return { type: SET_PRODUCTION_COMPANY_LOCATION, payload: location };
}
export function setPublicationPlace(place) {
  return { type: SET_PUBLICATION_PLACE, payload: place };
}
export function setPublicationYear(year) {
  return { type: SET_PUBLICATION_YEAR, payload: year };
}
export function setSeminarName(name) {
  return { type: SET_SEMINAR_NAME, payload: name };
}
export function setTitle(title) {
  return { type: SET_TITLE, payload: title };
}
export function setUrl(url) {
  return { type: SET_URL, payload: url };
}
export function setVolume(volume) {
  return { type: SET_VOLUME, payload: volume };
}
