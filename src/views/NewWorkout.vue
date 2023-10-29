<template>
  <base-card>
    <div class="form-container">
      <form action="/addresKudapoidjot">
        <label for="treningName">Enter workout name: </label>
        <input id="treningName" type="text" placeholder="Workout name">
        <p></p>
        <p class="select-container">
          <label for="workout">Select workout:  </label>
          <select name="workout" id="workout">
            <option value="legs">Legs</option>
            <option value="chest">Chest</option>
            <option value="back">Back</option>
            <option value="arms">Arms</option>
            <option value="fullbody">Full Body</option>
          </select>
        </p>
        <p class="select-container">
          <label for="Exercise">Select exercise:</label>
          <select name="exercise" id="exercise">
            <option value="squats">Squtas</option>
            <option value="benchPress">Bench press</option>
            <option value="pullUps">Pull ups</option>
            <option value="bicepscurl">Biceps curl</option>
            <option value=abs>Abs curl</option>
          </select>
        </p>
        <p class="select-container">
        <button>Create</button>
        </p>
      </form>
    </div>
  </base-card>
</template>


<script>
export default {
  name: "NewWorkout",

  data() {
    return {
      exercise: {},
      muscleGroup: {},
      exercises: [],
      muscleGroups: [],
    }
  },

  methods: {
    getAllExercises() {
      fetch('/exercise', {
        credentials: "include",
        method: 'GET',
      })
          .then(response => response.json())
          .then(data => {
            this.exercises = data;
            console.log('aaaaaaa')
            console.log(this.exercises)
            console.log('aaaaaaa')
          })
          .catch(error => console.error(error))
    },
    getAllMusclesGroups() {
      fetch('/muscle-group', {
        credentials: "include",
        method: 'GET',
      })
          .then(response => response.json())
          .then(data => {
            this.muscleGroups = data;
            console.log('aaaaaaa')
            console.log(this.muscleGroups)
            console.log('aaaaaaa')
          })
          .catch(error => console.error(error))
    },
  },

  mounted() {
    this.getAllMusclesGroups()
    this.getAllExercises();
  }

}

</script>


<style scoped>
.select-container {
  display: flex;
}

.select-container select, .select-container label {
  margin-right: 10px;
}
</style>