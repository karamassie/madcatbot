const base = require('airtable').base('appS9WOamZi9CH8NO');

module.exports.listUsers = async () => {
  base('catleadertable').select({
    
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
          console.log('Retrieved', record.fields.Name,record.fields.Score);
        
      });

      
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

  }, function done(err) {
      if (err) { console.error(err); return; }
  });
}


base('catleadertable').create([
  {
    "fields": {
      "Name": "lexi",
      "Score": -100
    }
  },

], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});``