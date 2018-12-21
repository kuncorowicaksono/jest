<p align="center">
  <img src="https://assets.futuready.com/v2/asset/images/logo-futuready.png" height="40" /><br/>
  <span><b>BasicModel</b>: <span>Universal Model for Futuready Codeigniter [BETA]</span><br/>
  develop by and for <a href="https://futuready.com/" target="_blank">futuready.com</a>
</p>
  
<br/>

## Why

BasicModel helps you (developer) to create a code more fast and efficient. By using BasicModel, you just need to create a controller without create any model again.

## Features

- [x] **getRecordCount**: Return number of rows;
- [x] **getRecords**: Return array of records from table; *without softDelete;
- [x] **insertRecord**: Insert record, on successful updates return success: true;
- [x] **updateRecord**: Updates record, on successful updates return success: true;

- [x] **softDeleteRecord**: Instead delete record from table, we add deletedAt in database;
- [x] **getSoftDeletedRecords**: Return array of softDelete records from table;
- [x] **restoreSoftDeletedRecord**: Restore data which already in softDeletedRecord;

- [x] **hardDeleteRecord**: Delete record from table, and store it to log;

### Next features:

- [ ] **Upload File**: Upload file and record file description to database with return success;
- [ ] **Create Image Thumbnail**: Create thumb of uploaded image.;

> Which one do you want first? Any other recommendations? Search for [existing feature requests](https://github.com/kuncorowicaksono/jest/issues?q=is%3Aissue+is%3Aopen+label%3A%22feature+request%22+sort%3Areactions-%2B1-desc) and add a 👍 reaction on them, or create a new one.

<br/>

## Contributing

Bug reports, feature requests and other contributions are more than welcome! <br/>
Whenever possible, please make a pull request with the implementation instead of just requesting it.

> If the feature is big, please open an issue first for discussion.

## Running it locally

- `cd application/models`
- `git clone git@github.com:devhubapp/devhub.git`

That's it. It will copy the basicModel to your model. 

<br/>

## `getRecordCount`

***Goal :***
  * return number of rows
  
***How to call:***
```php
  $this->BasicModels->getRecordCount('tbl_name',$condition_array);
```
***Parameters :***
> ++ indicates parameter is must

- `$tbl_name++ `: name of table 
- `$condition `: array('column_name1'=>$column_val1,'column_name2'=>$column_val2);


## `getRecords`

***Goal :***
  * return array of records from table (without softDelete)
  
***How to call:***
```php
  $this->BasicModels->getRecords('tbl_name',$condition_array,$select,...);
```
***Parameters :***
> ++ indicates parameter is must

- `$tbl_name++ `: name of table 
- `$condition `: array('column_name1'=>$column_val1,'column_name2'=>$column_val2);
- `$select `: ('col1,col2,col3');
- `$order_by `: array('colname1'=>order,'colname2'=>order); Order='ASC OR DESC';
- `$start `: start for paging (number);
- `$limit `: limit for paging (number);
- `$join `: array('jointable'=>$table_b,'match_a'=>$table_a_reference,'match_b'=>$table_b_reference,'join_type'=>$join_type); join_type = FALSE/'LEFT'/'RIGHT';

> In case where we need joins, you can pass joins in controller also:
> Ex: $this->db->join('tbl_nameB AS b','tbl_nameA.col=b.col','left');
>     $this->BasicModels->getRecords('tbl_name',$condition_array,$select,...);	



<br/>

## Author

kuncoro.barot@futuready.com

<br/>

## License

Copyright (c) 2018 [Bruno Lemos](https://twitter.com/brunolemos).

This is project provided as is without any warranties.<br/>
By using this app you agree with its [privacy](PRIVACY.md) policy and the  [license](LICENSE.md) below:

- ✅ You are encouraged to use, share and submit pull requests with improvements;

- ✅ You are allowed to use the official hosted version ([devhubapp.com](https://devhubapp.com/)) on your company or commercial projects;

- ✅ You are allowed to use the source code for personal non-commercial purposes only, like studying or contributing;

- 🚫 You are not allowed to distribute this app anywhere, neither changed versions of this app, including but not limited to Apple Store, Google Play or Web; Changes to the source code can only be used locally, taking in consideration the other points of this License;

- 🚫 You are not allowed to charge people for this app, neither bypass its paid features, if any;

> Don't like this license? [Suggestions welcome](https://github.com/devhubapp/devhub/issues/33).
