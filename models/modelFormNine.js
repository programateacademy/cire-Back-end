const schema = mongoose.Schema;

const mySchema = new schema(
  {

  },
  {
    timestamps: true
  }
);

const model = mongoose.model('FormNine', mySchema);

module.exports = model;
