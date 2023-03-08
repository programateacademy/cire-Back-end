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
        option: String

      },

      It_takes_a_lot_of_effort_to_stay_still_in_one_place_for_short_periods_of_time: {
        option: String
      },

      Lacks_interest_in_group_activities: {
        option: String
      },

      Often_you_cant_finish_what_you_start: {
        option: String
      },

      It_is_difficult_for_him_to_understand_instructions_and_execute_them_at_the_pace_of_the_rest_of_the_group: {
        option: String
      },

      He_tires_easily_and_does_not_care_about_quality_when_doing_his_work: {
        option: String
      },

      Ask_for_the_order_to_be_repeated_several_times: {
        option: String
      },

      Has_difficulty_organizing_and_finishing_work: {
        option: String
      },

      Has_difficulty_remembering_what_has_just_been_said: {
        option: String
      },

      No_manifest_interest_in_reading_activities: {
        option: String
      },


      Objects_are_brought_too_close_to_the_eyes_to_observe_or_recognize_them:{
        option: String
      },

      Has_difficulty_identifying_sounds:{
        option: String
      },

      Does_not_cooperate_in_group_games:{
        option: String
      },

      You_cannot_do_the_activity_alone_need_direct_or_permanent_help:{
        option: String
      },

      Does_not_speak_or_uses_only_a_few_words_or_two_word_phrases:{
        option: String
      },

      Use_difficult_to_understand_language:{
        option: String
      },

      Does_not_articulate_some_phonemes_correctly:{
        option: String
      },

      stutters:{
        option: String
      },

      Does_not_communicate_with_your_instructor_or_fellow_students:{
        option: String
      },

      Communicates_through_mime_or_gestures:{
        option: String
      },

      Rarely_responds_when_others_speak_to_him:{
        option: String
      },

      Does_not_pay_attention_when_spoken_to:{
        option: String
      },


    },
  },

  {
    timestamps: true
  }

);

const model = mongoose.model('formDiagnosis', mySchema);

module.exports = model;
