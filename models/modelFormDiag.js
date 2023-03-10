const mongoose = require('mongoose');

const schema = mongoose.Schema;


const mySchema = new schema(
  {
    kid: {
      type: schema.ObjectId,
      ref: 'kid'
    },

    
      q1: {
        option: String

      },

      q2: {
        option: String
      },

     q3: {
        option: String
      },

      q4: {
        option: String
      },

      q5: {
        option: String
      },

      q6: {
        option: String
      },

      q7: {
        option: String
      },

      q8: {
        option: String
      },

      q9: {
        option: String
      },

      q10: {
        option: String
      },


      objects_are_brought_too_close_to_the_eyes_to_observe_or_recognize_them:{
        option: String
      },

      has_difficulty_identifying_sounds:{
        option: String
      },

      does_not_cooperate_in_group_games:{
        option: String
      },

      you_cannot_do_the_activity_alone_need_direct_or_permanent_help:{
        option: String
      },

      does_not_speak_or_uses_only_a_few_words_or_two_word_phrases:{
        option: String
      },

      use_difficult_to_understand_language:{
        option: String
      },

      does_not_articulate_some_phonemes_correctly:{
        option: String
      },

      stutters:{
        option: String
      },

      does_not_communicate_with_your_instructor_or_fellow_students:{
        option: String
      },

      communicates_through_mime_or_gestures:{
        option: String
      },

      rarely_responds_when_others_speak_to_him:{
        option: String
      },

      does_not_pay_attention_when_spoken_to:{
        option: String
      },


    },
  

  {
    timestamps: true
  }

);

const model = mongoose.model('formDiagnosis', mySchema);

module.exports = model;
