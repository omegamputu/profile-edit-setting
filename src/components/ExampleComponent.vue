<template>
    <div>
        <div class="row align-items-center">
            <div class="col-md-9" v-if="isViewName">
                <label class="mb-2">Name</label>
                <p class="text-muted">{{ user.name }}</p>
            </div>
            <div class="col-md-3" v-if="isViewName">
                <button class="flex items-center" @click="toggleName">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>
            </div>
            <div class="col-md-12">
                <form v-on:submit.prevent="editName" v-if="isVisibleNameForm" class="update-form">
                    <div class="form-group">
                        <input v-model="user.name" type="text" required>
                        <button type="submit">
                            <i class="far fa-check-square text-success fa-1x"></i>
                        </button>
                        <button @click="toggleName">
                            <i class="far fa-window-close fa-1x"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-md-9" v-if="isViewEmail">
                <label class="mb-2">E-Mail Address</label>
                <p class="text-muted">{{ user.email }}</p>
            </div>
            <div class="col-md-3" v-if="isViewEmail">
                <button class="flex items-center" @click="toggleEmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>
            </div>
            <div class="col-md-12">
                <form v-on:submit.prevent="editEmail" v-if="isVisibleEmailForm" class="update-form">
                    <div class="form-group">
                        <input v-model="user.email" type="email" required>
                        <button type="submit">
                            <i class="far fa-check-square text-success fa-1x"></i>
                        </button>
                        <button @click="toggleEmail">
                            <i class="far fa-window-close fa-1x"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row align-items-center">
            <div class="col-md-9" v-if="isViewUsername">
                <label class="mb-2">Username</label>
                <p class="text-muted">{{ user.username }}</p>
            </div>
            <div class="col-md-3" v-if="isViewUsername">
                <button class="flex items-center" @click="toggleUsername">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit btn-icon-prepend">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </button>
            </div>
            <div class="col-md-12">
                <form v-on:submit.prevent="editUsername" v-if="isVisibleUsernameForm" class="update-form">
                    <div class="form-group">
                        <input v-model="user.username" type="text" required>
                        <button type="submit">
                            <i class="far fa-check-square text-success fa-1x"></i>
                        </button>
                        <button @click="toggleUsername">
                            <i class="far fa-window-close fa-1x"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: {
                    name: 'John Doe',
                    email: 'johndoe@gmail.com',
                    username: 'johndoe'
                },
                isVisibleNameForm: false,
                isVisibleEmailForm: false,
                isVisibleUsernameForm: false,
                //
                isViewName: true,
                isViewEmail: true,
                isViewUsername: true,
                //
                isActive: false
            }
        },
        methods: {
            // Toggle Method goes here
            toggleName () {
                if (!this.isActive){
                    this.isViewName = !this.isViewName
                    this.isVisibleNameForm = !this.isVisibleNameForm
                } else {
                    this.isViewName = this.isViewName
                    this.isVisibleNameForm = this.isVisibleNameForm
                }
            },
            toggleEmail () {
                if (!this.isActive){
                    this.isViewEmail = !this.isViewEmail
                    this.isVisibleEmailForm = !this.isVisibleEmailForm
                } else {
                    this.isViewEmail = this.isViewEmail
                    this.isVisibleEmailForm = this.isVisibleEmailForm
                }
            },
            toggleUsername () {
                if (!this.isActive){
                    this.isViewUsername = !this.isViewUsername
                    this.isVisibleUsernameForm = !this.isVisibleUsernameForm
                } else {
                    this.isViewUsername = this.isViewUsername
                    this.isVisibleUsernameForm = this.isVisibleUsernameForm
                }
            },
            //
            editName: function(e) {
                e.preventDefault()
            },
            editEmail: function (e) {
                e.preventDefault();
            },
            editUsername: function (e) {
                e.preventDefault()
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
    button {
        padding: 0;
        margin-top: 7px;
        border: none;
        font: inherit;
        color: #495057;
        background-color: transparent;
        cursor: pointer;
    }
    .flex {
        display: flex;
        align-items: center;
    }

    .update-form
    {
        width: 100%;
        position: relative;
    }
    .update-form input {
        width: 370px;
        height: 50px;
        padding: 0px 78px 0 30px;
        border: none;
        background: #f6f6f6;
        border-radius: 5px;
        display: inline-block;
        margin-right: 10px;
        font-weight:400;
        font-size:14px;
    }
</style>