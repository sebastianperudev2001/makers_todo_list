import json

def read_json(file_name):
  with open(file_name, 'r') as file:
    data = json.load()
    return data
  
def get_task_id(data, user_id, date, task_id):
   if user_id in data and date in data[user_id] and task_id in data[user_id][date]:
      return data[user_id][date][task_id]
  

def get_all(data):
    all_tasks = []
    for user_id in data:
        for date in data[user_id]:
            for task_id in data[user_id][date]:
                task = data[user_id][date][task_id]
                all_tasks.append(task)
    return all_tasks
         
def update_completed(data, user_id, date, task_id, file_name):
   task = get_task_id(data, user_id, date)
   if task:
      task_completed = data[user_id][date][task_id]['completed']
      data[user_id][date][task_id]['completed'] = not task_completed
      write_json(data, file_name)
      return True
   return False
   

def write_json(data, file_name):
    with open(file_name, 'w') as file:
        json.dump(data, file, indent=4)

def add_task(data, user_id, date, new_task, file_name):
  if user_id not in data:
    data[user_id] = {}

  if date not in data[user_id]:
     data[user_id][date] = {}
  
  data[user_id][date].update(new_task)
  write_json(data, file_name)

def read_task(data, user_id, date, task_id):
   return data.get(user_id, {}).get(date, {}).get(task_id)

def update_task(data, user_id, date, task_id, new_task_data, file_name):
   if user_id in data and data in data[user_id] and task_id in data[user_id][date]:
      del data[user_id][date][task_id]
      write_json(data, file_name)

def delete_task(data, user_id, date, task_id, file_name):
    if user_id in data and date in data[user_id] and task_id in data[user_id][date]:
        del data[user_id][date][task_id]
        write_json(data, file_name)