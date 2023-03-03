const schema = mongoose.Schema;

const mySchema = new schema(
  {

  },
  {
    timestamps: true
  }
);

const model = mongoose.model('FormFive', mySchema);

module.exports = model;
