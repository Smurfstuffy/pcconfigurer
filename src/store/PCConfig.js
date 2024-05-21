import { makeAutoObservable, autorun } from "mobx";

class PCConfig {
  config = {
    processor: {},
    cooler: {},
    motherboard: {},
    graphicalCard: {},
    memory: {},
    storage: {},
    powerSupply: {},
    fan: {},
    case: {}
  }

  constructor() {
    makeAutoObservable(this, {}, { deep: true });

    const storedConfig = localStorage.getItem("pcConfig");
    if (storedConfig) {
      this.config = JSON.parse(storedConfig);
    }

    autorun(() => {
      localStorage.setItem("pcConfig", JSON.stringify(this.config));
    });
  }

  setProcessor(processor) {
    this.config.processor = processor;
  }

  setCooler(cooler) {
    this.config.cooler = cooler;
  }

  setMotherboard(motherboard) {
    this.config.motherboard = motherboard;
  }

  setGraphicalCard(graphicalCard) {
    this.config.graphicalCard = graphicalCard;
  }

  setMemory(memory) {
    this.config.memory = memory;
  }

  setStorage(storage) {
    this.config.storage = storage;
  }

  setPowerSupply(powerSupply) {
    this.config.powerSupply = powerSupply;
  }

  setFan(fan) {
    this.config.fan = fan;
  }

  setCase(pcCase) {
    this.config.case = pcCase;
  }

  removeProcessor() {
    this.config.processor = {};
  }

  removeCooler() {
    this.config.cooler = {};
  }

  removeMotherboard() {
    this.config.motherboard = {};
  }

  removeGraphicalCard() {
    this.config.graphicalCard = {};
  }

  removeMemory() {
    this.config.memory = {};
  }

  removeStorage() {
    this.config.storage = {};
  }

  removePowerSupply() {
    this.config.powerSupply = {};
  }

  removeFan() {
    this.config.fan = {};
  }

  removeCase() {
    this.config.case = {};
  }
}

export default new PCConfig();
