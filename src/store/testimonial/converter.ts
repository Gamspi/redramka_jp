import { ResponseReview, ReviewType } from 'src/store/testimonial/type'

export function reviewConverter ({ ...args }:ResponseReview): ReviewType {
  return args
}
