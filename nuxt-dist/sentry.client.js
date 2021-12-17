import VueLib from 'vue'
import merge from 'lodash.mergewith'
import * as Sentry from '@sentry/browser'
import { Dedupe, ExtraErrorData, ReportingObserver, RewriteFrames, Vue } from '@sentry/integrations'

import { Integrations as TracingIntegrations } from '@sentry/tracing'

export default function (ctx, inject) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {
    dsn:"https:\u002F\u002F145a57e3050047269d79f9fad897254a@o1065687.ingest.sentry.io\u002F6096262",
    environment:"development",
    release:"77743bae4a06965cafd44663a1d50744e82e9c59",
    tracesSampleRate:1
  }

  const runtimeConfigKey = "sentry"
  if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
    merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig)
  }

  config.integrations = [
    new Dedupe({}),
    new ExtraErrorData({}),
    new ReportingObserver({}),
    new RewriteFrames({}),
    new Vue({ Vue: VueLib, ...{"attachProps":true,"logErrors":true,"tracing":true,"tracingOptions":{"hooks":["mount","update"],"timeout":2000,"trackComponents":true}}})
  ]

    config.integrations.push(new TracingIntegrations.BrowserTracing({}))

  /* eslint-enable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  Sentry.init(config)

  inject('sentry', Sentry)
  ctx.$sentry = Sentry
}
