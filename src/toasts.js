import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    fullWidth: true,
    theme: 'toasted-primary',
    iconPack: 'fontawesome',
    // singleton: true,
    duration : 3000
});

Vue.toasted.register(
    'form_validation_error',
    'Please check your form inputs and try submitting again.', {
        type: 'error',
        icon: 'fa-exclamation-circle'
    }
);

Vue.toasted.register(
    'connection_timeout',
    'Connection timeout. There might be a problem with your internet connection.', {
        type: 'error',
        icon: 'fa-exclamation-circle'
    }
);

Vue.toasted.register(
    'internet_disconnected',
    'Operation could not be completed. You seem not to have an internet connection.', {
        type: 'error',
        icon: 'fa-exclamation-circle'
    }
);

Vue.toasted.register(
    'pending_action',
    'Please wait...', {
        type: 'show',
        icon: 'fa-hourglass-half',
        duration: 10000
    }
);

Vue.toasted.register(
    'loading',
    'Loading...', {
        type: 'show',
        icon: 'fa-hourglass-half',
        duration: 60000
    }
);

export const Toasts = new Vue();