<template>
  <v-card class="pb-12">
    <!-- 罰ボタン -->
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>

    <!-- イベントネーム -->
    <v-card-title>
      <DialogSection icon="mdi-square" :color="event.color">
        {{ event.name }}
      </DialogSection>
    </v-card-title>

    <!-- 時間 -->
    <v-card-text>
      <DialogSection icon="mdi-clock-time-three-outline">
        {{ event.start.toLocaleString() }} ~ {{ event.end.toLocaleString() }}
      </DialogSection>
    </v-card-text>

    <!-- 説明 -->
    <v-card-text>
      <DialogSection icon="mdi-card-text-outline">
        {{ event.description || 'no description' }}
      </DialogSection>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DialogSection from './DialogSection.vue';

export default {
  name: 'EventDetailDialog',
  components: {
    DialogSection,
  },
  computed: {
    ...mapGetters('events', ['event']),
  },
  methods: {
    ...mapActions('events', ['setEvent']),
    closeDialog() {
      this.setEvent(null);
    },
  },
};
</script>
