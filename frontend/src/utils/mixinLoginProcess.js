import { mapActions, mapMutations } from "vuex";

const mixinLoginProcess = {
  methods: {
    ...mapMutations(["UPDATE_USER", "SHOW_LOGIN_SCREEN", "UPDATE_ROLE_USER"]),
    ...mapActions(["LOGIN_PROCESS"]),
    loginProcess(user) {
      this.LOGIN_PROCESS(user);
    },
  },
};

export default mixinLoginProcess;
