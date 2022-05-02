import * as AWS from 'aws-sdk';
import {Constants} from './constants';

  // AWS.config.loadFromPath('./config.json');
AWS.config.update(configuration);
const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => dispatch => {
    var params = {
        TableName: tableName
    }

    dispatch({  type: Constants.GET_DATA_OUT });

    docClient.scan(params, function (err, data) {
        if (!err) {
            const ret = data.Items.map((obj) => {
                return {
                  "name": new Intl.DateTimeFormat('en-US', 
                    {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(obj.timeStamp),
                  "value": obj.payload.tds_value,
                }
              });
            ret.sort((a, b) => {
                return new Date(b.name) - new Date(a.name);
            })
            console.log("ha");
            dispatch({
              type: Constants.SET_DATA,
              data: ret,
            });
            dispatch({
              type: Constants.SET_PAGE,
              currentPage: 1,
            });
          dispatch({ type: Constants.GET_DATA_SUCCESS });
        } else {
            console.log("ERROR", err)
        }
    })
}