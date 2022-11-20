import { Product } from './Product';
import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  Products: {
    required: true,
    type: [{
      Product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
}));
