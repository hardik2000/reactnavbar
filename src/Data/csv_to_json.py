import csv 
import json 

def csv_to_json(csvFilePath, datesFile, scoresFile):
    dates = {"category" : []}
    scores = {"data" : []}
    with open(csvFilePath, encoding='utf-8') as csvf: 
        csvReader = csv.DictReader(csvf) 

        for row in csvReader: 
            print(row)
            dates['category'].append({"label":f"{row['Date']}"})
            scores['data'].append({"value":f"{str(float(row['Score']))}"})
            #add this python dict to json array
            # break
    dates = [dates]
    scores = [scores] 
    # print(dates,scores)       
    # #convert python jsonArray to JSON String and write to file
    with open(datesFile, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(dates, indent=4)
        jsonf.write(jsonString)
    with open(scoresFile, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(scores, indent=4)
        jsonf.write(jsonString)
csvFilePath = r'score_newlm.csv'
datesFile = r'Dates_newlm.json'
scoresFile = r'Scores_newlm.json'
csv_to_json(csvFilePath, datesFile, scoresFile)