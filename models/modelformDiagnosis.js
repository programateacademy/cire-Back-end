const mongoose = require('mongoose');

const schema = mongoose.Schema;


const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid'
    },

    cognitiveDomain: {
      Shows_an_indifferent_attitude_towards_the_stimuli_it_receives: {
        yes: String,
        Not: String

      },

      It_takes_a_lot_of_effort_to_stay_still_in_one_place_for_short_periods_of_time: {
        yes: String,
        Not: String
      },

      Lacks_interest_in_group_activities: {
        yes: String,
        Not: String
      },

      Often_you_cant_finish_what_you_start: {
        yes: String,
        Not: String
      },

      It_is_difficult_for_him_to_understand_instructions_and_execute_them_at_the_pace_of_the_rest_of_the_group: {
        yes: String,
        Not: String
      },

      He_tires_easily_and_does_not_care_about_quality_when_doing_his_work: {
        yes: String,
        Not: String
      },

      Ask_for_the_order_to_be_repeated_several_times: {
        yes: String,
        Not: String
      },

      Has_difficulty_organizing_and_finishing_work: {
        yes: String,
        Not: String
      },

      Has_difficulty_remembering_what_has_just_been_said: {
        yes: String,
        Not: String
      },

      No_manifest_interest_in_reading_activities: {
        yes: String,
        Not: String
      },


      Objects_are_brought_too_close_to_the_eyes_to_observe_or_recognize_them:{
        yes: String,
        Not: String
      },

      Has_difficulty_identifying_sounds:{
        yes: String,
        Not: String
      },

      Does_not_cooperate_in_group_games:{
        yes: String,
        Not: String
      },

      You_cannot_do_the_activity_alone_need_direct_or_permanent_help:{
        yes: String,
        Not: String
      },

      Does_not_speak_or_uses_only_a_few_words_or_two_word_phrases:{
        yes: String,
        Not: String
      },

      Use_difficult_to_understand_language:{
        yes: String,
        Not: String
      },

      Does_not_articulate_some_phonemes_correctly:{
        yes: String,
        Not: String
      },

      stutters:{
        yes: String,
        Not: String
      },

      Does_not_communicate_with_your_instructor_or_fellow_students:{
        yes: String,
        Not: String
      },

      Communicates_through_mime_or_gestures:{
        yes: String,
        Not: String
      },

      Rarely_responds_when_others_speak_to_him:{
        yes: String,
        Not: String
      },

      Does_not_pay_attention_when_spoken_to:{
        yes: String,
        Not: String
      },


    },
  },

  {
    timestamps: true
  }

);

const model = mongoose.model('formDiagnosis', mySchema);

module.exports = model;
