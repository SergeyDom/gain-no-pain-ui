<template>
    <base-card>
        <div class="form-container">
            <form>
                <label for="treningName">Enter workout name: </label>
                <input id="treningName" type="text" placeholder="Workout name"
                v-model="workout.name">
                <p></p>
                <p class="select-container">
                    <label for="muscleGroups">Select muscle group: </label>
                    <select name="workout" id="workout" v-model="workout.muscleGroupId">
                        <option v-for="muscleGroup in muscleGroups"
                                :key="muscleGroup.id"
                                :value="muscleGroup.id">
                            {{ muscleGroup.name }}
                        </option>
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
                    <button v-on:click="createNewWorkout()">Create</button>
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
            workout: {
                name,
                muscleGroupId: Number,
                exerciseIds: [],
            },
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
                    console.log('bbbbbbbb')
                    console.log(this.muscleGroups)
                    console.log('bbbbbbbb')
                })
                .catch(error => console.error(error))
        },

        createNewWorkout() {
            console.log("NEW WORKOUT: " + this.workout.muscleGroupId);
            console.log('bbbbbbbb');
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
