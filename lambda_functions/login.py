#import json
import boto3
from boto3.dynamodb.conditions import Key

def lambda_handler(event, content):
    dynamodb = boto3.resource('dynamodb', region_name=('us-west-2'))
    response = {'stateCode': 200}
    table = dynamodb.Table('userList')
    
    user = table.get_item(
        Key = {
            "username":event['user']
            }
        )
    
    if event['type'] == 'login':
        # login
        if 'Item' not in user or user['Item']['password'] != event['password']:
            response['stateCode'] = 401 
    else:
        # register
        if 'Item' in user:
            response['stateCode'] = 401
        else:
            table.put_item(
                Item = {
                    "username": event['user'],
                    "password": event['password']
                    }
                )
            
            check = table.query(
                KeyConditionExpression = Key('username').eq(event['user'])
                )
            if 'Items' not in check:
                response["stateCode"] = 400;
    return response
