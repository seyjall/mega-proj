import {
  lemonSqueezySetup,
  createCheckout,
} from '@lemonsqueezy/lemonsqueezy.js';
import crypto from 'crypto';
import conf from "../conf/conf.js"

class LemonSqueezyService {
  constructor() {
    this.client = lemonSqueezySetup({
      apiKey: conf.lemonsqueezyapikey,
    });
  }

  async createCheckout(context, userId, userEmail, userName) {
    try {
      const storeId = conf.lemonssqueezystoreid;
      const variantId = conf.lemonsqueezyvariant;
      const newCheckout = {
        productOptions: {
          name: 'Test Product',
          description:
            'A product created to test Lemon Squeezy payments in Appwrite Functions.',
        },
        checkoutOptions: {
          embed: true,
          media: true,
          logo: true,
        },
        checkoutData: {
          email: userEmail ?? 'test@user.xyz',
          name: userName ?? 'Test User',
          custom: {
            user_id: userId,
          },
        },
        expiresAt: null,
        preview: true,
        testMode: true,
      };
      return await createCheckout(storeId, variantId, newCheckout);
    } catch (err) {
      context.error(err);
      return null;
    }
  }

  validateWebhook(context) {
    try {
      const secret = conf.lemonsqueezywebhooksecret;
      const hmac = crypto.createHmac('sha256', secret);
      const digest = Buffer.from(
        hmac.update(context.req.bodyBinary).digest('hex'),
        'utf8'
      );
      const signature = Buffer.from(context.req.headers['x-signature'], 'utf8');

      if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Invalid signature.');
      }

      context.log('Webhook signature is valid.');
      return true;
    } catch (err) {
      context.error(err);
      return false;
    }
  }
}

export default LemonSqueezyService;
