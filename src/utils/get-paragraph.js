import { randomize } from './randomize'
import { quotes } from '../quotes/quotes'

export function getParagraphs(paraQty, paraLength) {
  let paraArr = [];
  for (let i = 0; i < paraQty; i++) {
    randomize(quotes);
    let sentences = [];

    for (let j = 0; j < paraLength; j++) {
      sentences.push(quotes[j])
    }

    let para = sentences.join(' ');
    paraArr.push(para);
  }
  return paraArr;
}