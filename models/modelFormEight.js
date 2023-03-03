const schema = mongoose.Schema;

const mySchema = new schema(
  {

  },
  {
    timestamps: true
  }
);

const model = mongoose.model('FormEight', mySchema);

module.exports = model;
