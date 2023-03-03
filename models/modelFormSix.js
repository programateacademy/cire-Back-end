const schema = mongoose.Schema;

const mySchema = new schema(
  {

  },
  {
    timestamps: true
  }
);

const model = mongoose.model('FromSix', mySchema);

module.exports = model;
