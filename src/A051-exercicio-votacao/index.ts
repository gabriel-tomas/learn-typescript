type Candidate = {
  name: string;
  votes: number;
};

type CandidatesArray = Candidate[];

class Candidates {
  private _candidates: CandidatesArray = [];

  get candidates(): CandidatesArray {
    return this._candidates;
  }

  addVote(candidateName: string): Candidate {
    const candidateToAddVote = this.candidateExist(candidateName);

    if (!candidateToAddVote) {
      throw new Error('Candidate does not exist');
    }

    candidateToAddVote.votes++;

    return candidateToAddVote;
  }

  addCandidate(candidateName: string): Candidate {
    const newCandidate: Candidate = {
      name: candidateName,
      votes: 0,
    };
    this._candidates.push(newCandidate);
    return newCandidate;
  }

  removeCandidate(candidateName: string): Candidate {
    const candidateToRemove = this.candidateExist(candidateName);

    if (!candidateToRemove) {
      throw new Error('Candidate does not exist');
    }

    this._candidates.splice(this._candidates.indexOf(candidateToRemove), 1);

    return candidateToRemove;
  }

  private candidateExist(candidateName: string): Candidate | null {
    for (const candidate of this._candidates) {
      if (candidate.name === candidateName) {
        return candidate;
      }
    }
    return null;
  }
}

abstract class VoteAppProtocol {
  protected readonly _candidates: Candidates = new Candidates();
  constructor(protected readonly title: string) {}

  get candidates(): CandidatesArray {
    return this._candidates.candidates;
  }

  abstract displayCandidates(): void;

  addCandidate(candidateName: string): void {
    this._candidates.addCandidate(candidateName);
  }

  removeCandidate(candidateName: string) {
    this._candidates.removeCandidate(candidateName);
  }

  addVote(candidateName: string) {
    this._candidates.addVote(candidateName);
  }
}

class VoteApp extends VoteAppProtocol {
  displayCandidates(): void {
    console.log(this.title);
    if (this.candidates.length === 0) {
      console.log('Sem candidatos');
      return;
    }
    this.candidates.forEach((candidate) => {
      console.log(`${candidate.name} - ${candidate.votes}`);
    });
    console.log('####');
    console.log('');
  }
}

export const voteAppLanguage = new VoteApp('Sua linguagem favorita');
voteAppLanguage.addCandidate('JavaScript');
voteAppLanguage.addCandidate('TypeScript');
voteAppLanguage.addCandidate('Python');
voteAppLanguage.addCandidate('PHP');

voteAppLanguage.addVote('JavaScript');
voteAppLanguage.addVote('JavaScript');
voteAppLanguage.addVote('JavaScript');

voteAppLanguage.displayCandidates();

export const voteAppColor = new VoteApp('Qual sua cor favorita');

voteAppColor.addCandidate('Vermelho');
voteAppColor.addCandidate('Verde');
voteAppColor.addCandidate('Azul');

voteAppColor.addVote('Vermelho');
voteAppColor.addVote('Verde');
voteAppColor.addVote('Verde');
voteAppColor.addVote('Verde');

voteAppColor.displayCandidates();
