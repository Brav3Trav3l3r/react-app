export default function tasksReducer(people, action) {
    switch (action.type) {
      case 'add': {
        return [
          ...people,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
    //   case 'changed': {
    //     return tasks.map((t) => {
    //       if (t.id === action.task.id) {
    //         return action.task;
    //       } else {
    //         return t;
    //       }
    //     });
    //   }
      case 'delete': {
        return people.filter((e) => e.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  