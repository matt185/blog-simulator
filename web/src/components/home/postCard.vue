<template>
  <v-card class="mx-auto" color="#3949AB" dark max-width="60%">
    <v-row
      ><v-col class="d-flex flex-column align-center col" cols="6" md="3">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
        <v-text>{{ username }}</v-text>
      </v-col>
      <v-col cols="12" sm="6" md="9">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-toolbar-title class="title white--text pl-0"> {{ title }} </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="white" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-card-text class="p font-weight-light"> {{ text }} </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-icon class="mr-1"> mdi-heart </v-icon>
            <span class="subheading mr-2">{{ like }}</span>
            <v-row align="center" justify="end">
              <v-btn icon @click="show = !show"
                >comments
                <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
              </v-btn>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-card-actions class="show_comments_area"> </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver.
          You won't have time for sleeping, soldier, not with all the bed making you'll be
          doing. Then we'll go with that data file! Hey, you add a one and two zeros to
          that or we walk! You're going to do his laundry? I've got to find a way to
          escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    username: String,
    title: String,
    like: Number,
    text: String,
    author: String,
    createdAt: String,
  },
  data: () => {
    return {
      show: false,
    };
  },
};
</script>

<style>
.show_comments_area {
  display: flex;
  justify-content: flex-end;
}
.v-btn--icon.v-size--default {
  width: fit-content;
}
</style>
